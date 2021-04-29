import react, {useState ,useEffect} from 'react';

let Hello = ({name, age}) => {

    const style = {
        color: 'blue',
        backgroundColor: 'beige'
    }

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count]);
    // 이 변수가 (count)가 바뀌때마다 이 effect가 사용되는것

    return (
        // div요소 절약 => <>, </>로 활용
        //<> : <React.Fragment></React.Fragment> 와 동일함 
        <>
            <h1 style={style}>
                Hello, {name}, {age}
            </h1>
            <img src="https://coopa-default.s3.ap-northeast-2.amazonaws.com/default_thumbnail.png"></img>
            <h1>클릭횟수 : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
        </>
    )
}

export default Hello;