export default function nick() {
    const handleClick = () => {
        console.log("Hello")
    };
    return <button onclick={handleClick}>Say Hello</button>;
}