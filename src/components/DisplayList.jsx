import DeleteIcon from "@mui/icons-material/Delete";

const DisplayList = ({ todo, onChange, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        overflow: "auto",
        padding: "10px",
        margin: "0",
        fontFamily: "sans-serif",
        fontSize: "30px",
        backgroundColor: "#fffcf5",
      }}
    >
      <label
        style={{
          marginRight: "10px",
          display: "flex",
          justifyContent: "flex-start",
          textDecoration: todo?.status ? "line-through" : "none",
          width: "100%",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          style={{
            width: "30px",
            height: "30px",
            padding: 0,
            border: "1px solid",
          }}
          checked={todo.status}
          onChange={() => onChange(todo)}
          id={todo.id}
        />
        <h4
          style={{
            marginLeft: "10px",
            boxShadow: "5px 5px 5px lightblue",
            width: "70%",
            padding: "10px",
          }}
        >
          {todo?.title}
        </h4>
        <button
          type="button"
          style={{
            width: "50px",
            height: "50px",
            padding: 0,
            marginLeft: "10px",
            backgroundColor: "#fffcf5",
            border: "none",
          }}
          onClick={() => onDelete(todo)}
        >
          <DeleteIcon style={{ color: "red" }} />
        </button>
      </label>
    </div>
  );
};

export default DisplayList;
