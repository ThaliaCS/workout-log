const DeleteButton = (onClick) => {

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.classList.add("deleteButton")

    deleteButton.addEventListener("click", onClick);

    return deleteButton;
  };

  export default DeleteButton