export default function Form({ onAddComment }) {
  function handeleSubmit(event) {
    event.preventDefault();
    /*  const formData = new FormData(event.terget);
      const data = Object.fromEntries(formData); */
    const data = {comment: event.target.elements.comment.value};

    onAddComment(data);
    event.target.reset();
    event.target.comment.focus();
  }

  return (
    <form onSubmit={handeleSubmit}>
      <div>
        <label htmlFor="comment">Add comment:</label>
        <input type="text" name="comment" id="comment" />
      </div>
      <button>Send</button>
    </form>
  );
}
