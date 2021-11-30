import {useNavigate} from 'react-router-dom';
import {Button} from "antd";

export default function Navigate(props) {
    let navigate =useNavigate();
    function handleClick(url) {
        alert("url"+url);
        navigate(url);
    }
    return (
        <Button onClick={handleClick(props.url)} type="primary" htmlType="提交" >
        提交
        </Button>)
}
