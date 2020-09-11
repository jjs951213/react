import React, { useReducer } from 'react';


function reducer(state, action) {
  return {
<<<<<<< HEAD
    [state.name] : state.value,
    [action.name]: action.value
=======
     [action.name]: action.value,
     [action.nickname]: action.value
>>>>>>> parent of fa8243e... 9.1 가장 흔한 방식, 일반 css
  };
}



const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };



return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};



export default Info;