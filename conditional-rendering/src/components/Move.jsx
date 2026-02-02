const Move = () => {
  const moveHandler = () => {
    alert("Mouse event fired");
    console.log("mouse move event fire");
  };
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum
      reiciendis cupiditate repudiandae, quae qui neque dolor iusto quam
      corporis quo in, deserunt, alias nemo illo! Veritatis obcaecati iusto
      error cumque voluptate?
    </p>
  );
};
export default Move;
