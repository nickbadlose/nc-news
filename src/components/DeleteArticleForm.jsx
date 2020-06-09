import React from "react";
import { useToggle } from "../hooks";
import { navigate } from "@reach/router";
import * as api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import { observer } from "mobx-react";

const DeleteArticleForm = observer(
  ({ article_id, dispatch, isMounted, userPage }) => {
    const [deleteArticle, handleDeleteArticle] = useToggle();

    const deleteArticleById = () => {
      handleDeleteArticle();
      api
        .removeArticleById(article_id)
        .then(() => {
          if (isMounted.current) {
            userPage ? dispatch({ type: "delete" }) : navigate("/articles");
          }
        })
        .catch(({ response }) => {
          dispatch({
            type: "err",
            err: {
              status: response.status,
              msg: response.data.msg,
            },
          });
        });
    };

    return (
      <div>
        <Modal
          show={deleteArticle}
          onHide={handleDeleteArticle}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Your Article?!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this article? This action cannot be
            undone!
          </Modal.Body>
          <Modal.Footer>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip">Delete Article!</Tooltip>}
            >
              <Button
                type="submit"
                variant="danger"
                size="sm"
                onClick={deleteArticleById}
              >
                <FontAwesomeIcon icon={faTrashAlt} className="trashIcon" />
              </Button>
            </OverlayTrigger>
            <Button variant="secondary" onClick={handleDeleteArticle} size="sm">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {!deleteArticle && (
          <OverlayTrigger
            overlay={<Tooltip id="tooltip">Delete Article!</Tooltip>}
          >
            <Button
              type="submit"
              variant="danger"
              size="sm"
              onClick={handleDeleteArticle}
            >
              <FontAwesomeIcon icon={faTrashAlt} className="trashIcon" />
            </Button>
          </OverlayTrigger>
        )}
      </div>
    );
  }
);

export default DeleteArticleForm;
