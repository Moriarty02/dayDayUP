1.es6 计算属性名
···
 handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        /* 这里的name是可变的 会根据传入的name的参数改变
         * 好处就在于可以动态设*置属性名称
         */
      [name]: value
    });
  }
  ···
  2.react的组件可以是一个函数 只要这个函数的返回值是一个符合render函数调用
  的值（jsx）就可以，参数为props


  ···
  function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
···
3.循环的时候如果是子组件 必须带上key值 可以去map(item，index)的index作为键


  
