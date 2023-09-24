// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form (props) {
    //The component must return some JSX
    return (
      <div>
        <h1>The Form Component</h1>;
        <form>
          <input type="text" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  };