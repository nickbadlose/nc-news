import React, { useState, useEffect, useRef } from "react";
import { userStore } from "../stores/userinfo";
import { useForm, useToggle } from "../hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import { StyledDiv } from "../styling/PostTopicForm.styles";
import superagent from "superagent";

const clientID = "ik__FxLjO_5Cieki0XQDwEjaEUZAXK8PKHCGNlz4nW4";

const initialForm = {
  slug: "",
  description: "",
  image: "",
  validTopic: false,
  validated: false,
  invalidFormat: false,
};

const PostTopicForm = () => {
  const [postingTopic, handlePostingTopic] = useToggle();
  const { form, handleChange, handlePostTopic, setForm } = useForm(
    initialForm,
    handlePostingTopic
  );
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [photoErr, setPhotoErr] = useState(null);
  const queryInput = useRef(null);

  const simpleGet = (options) => {
    setPhotoErr(false);
    superagent
      .get(options.url)
      .then(function (res) {
        if (options.onSuccess) options.onSuccess(res);
      })
      .catch(() => {
        setPhotoErr(true);
      });
  };

  const numberOfPhotos = 10;

  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };

  const handleImage = (url) => {
    setForm((c) => {
      c.image = url;
    });
  };

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    simpleGet({
      url: photosUrl,
      onSuccess: (res) => {
        setPhotos(res.body);
      },
    });
  }, [query, url]);

  return (
    <StyledDiv>
      <Modal
        show={postingTopic}
        onHide={() => {
          setForm((c) => initialForm);
          setPhotoErr(false);
          handlePostingTopic();
        }}
        aria-labelledby="modal-posting-topic"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>What would you like to discuss?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={form.validated} onSubmit={handlePostTopic}>
            <Form.Group controlId="topicSlugForm">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                onChange={(e) => handleChange(e, "slug")}
                value={form.slug}
                maxLength="12"
                isInvalid={form.invalidTopic}
              />
              {form.invalidFormat ? (
                <Form.Control.Feedback type="invalid">
                  Topic title must not contain spaces!
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Topic already exists!
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="toppicDescriptionForm">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={form.body}
                onChange={(e) => handleChange(e, "description")}
                required
                type="text"
                maxLength="55"
                placeholder="Description"
                className="descriptionForm"
              />
            </Form.Group>
            <Form.Group controlId="toppicImageForm">
              <Form.Label>Topic image URL</Form.Label>
              <Form.Control
                value={form.image}
                required
                type="text"
                disabled={true}
                placeholder="Search and click an image below to select it"
                className="imageForm"
              />
              <Form.Text className="text-muted">
                Optional, if you don't choose an image, one will be generated
                based on your title
              </Form.Text>
            </Form.Group>
          </Form>
          <div className="box">
            <Form
              id="unsplash-search"
              className="unsplash-search-form"
              onSubmit={searchPhotos}
            >
              <Form.Group controlId="topicImageSearchForm">
                <Form.Label>
                  Search Photos on Unsplash add a FA help icon
                </Form.Label>
                <Form.Control
                  ref={queryInput}
                  placeholder="Search an image using unsplash!"
                  type="search"
                  className="topicSearchinput"
                  defaultValue=""
                  isInvalid={photoErr}
                />
                <Form.Control.Feedback type="invalid">
                  Your search didn't match any images!
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <ul className="photo-grid">
              {photos.map((photo) => {
                return (
                  <li key={photo.id}>
                    <img
                      src={photo.urls.small}
                      srcSet={`${photo.urls.small} 400w,
                      ${photo.urls.regular} 1080w`}
                      sizes="(max-width: 1250px) 400px, 1080px"
                      alt="unsplash"
                      onClick={() => handleImage(photo.urls.small)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip">Search images!</Tooltip>}
          >
            <Button
              type="submit"
              variant="primary"
              size="sm"
              onClick={searchPhotos}
            >
              Search
            </Button>
          </OverlayTrigger>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            onClick={handlePostTopic}
          >
            Post Topic
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setForm((c) => initialForm);
              setPhotoErr(false);
              handlePostingTopic();
            }}
            size="sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {!postingTopic &&
        (userStore.username ? (
          <Button type="submit" size="sm" onClick={handlePostingTopic}>
            Post Topic
          </Button>
        ) : (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">Log in to post a topic!</Tooltip>
            }
          >
            <span className="d-inline-block">
              <Button
                variant="primary"
                disabled
                style={{ pointerEvents: "none" }}
                size="sm"
              >
                Post Topic
              </Button>
            </span>
          </OverlayTrigger>
        ))}
    </StyledDiv>
  );
};

export default PostTopicForm;
