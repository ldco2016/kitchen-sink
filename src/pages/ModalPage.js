import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className='relative'>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
      <p>
        There is a ton of text here to prove the point that I have solved the
        ability to not scroll when modal is open and no matter where you are on
        the page when click open modal it will display the modal in the middle
        of the screen.
      </p>
    </div>
  );
}

export default ModalPage;
