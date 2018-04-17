1.es6 计算属性名

```javascript
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
);
```

>2.react的组件可以是一个函数 只要这个函数的返回值是一个符合render函数调用的值（jsx）就可以，参数为props

```javascript
	  
	function Welcome(props) {
	 return <h1>Hello, {props.name}</h1>;
	}
		
	const element = <Welcome name="Sara" />;
	ReactDOM.render(
	  element,
	  document.getElementById('root')
	);
```
>3.循环的时候如果是子组件 必须带上key值 可以去map(item，index)的index作为键
>
>4.eventHandler.bind(this) 为啥要bind？？
>
>5.条件渲染
>f代码块不能作为jsx的一部分写入代码中
>代替方式
>条件return 模板

```

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

>6.条件渲染
>>先判断在输出return

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
>>&&渲染

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&//条件渲染
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```
>>三目运算符 
>>
```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

>循环输出   map


  
