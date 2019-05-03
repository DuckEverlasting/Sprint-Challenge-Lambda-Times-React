1. Proptypes are used to pass information from one component to another (specifically from a parent to a child). It is important to typecheck data because most of the time incoming data of the wrong basic type will break functionality.


2. A life-cycle in React: A component mounts, updates as many times as necessary, then unmounts. Its mounting phase consists of calling its constructor, then rendering, then running componentDidMount() if it exists. If new props are passed in, if there is a change in state, or if an update is forced, it will then go into an update phase, which rerenders after setting the new data (and then calling componentDidUpdate(), if it exists). Unmounting is simpler; the component just ends, and calls componentWillUnmount() before it is gone.


3. A Higher Order Component is a functional component that accepts a different component (or a group of components) as an argument. It is never rendered onto the DOM, but instead returns components fed into it in an altered state.


4. Styling in React:
    
    A - Using CSS: CSS is fairly standard, and is useful for being easy to use, and for having been the universal standard for decades.

    B - Using inline styling: Inline styling is more inline with how React works, in that it can keep your styling information right there with the rest of your code. It is also HIGHLY specific, as styles only go to items they are assigned to.

    C - Using Styled Components: Styled Components basically takes the concept of inline styling and runs with it, making it simpler to use, more efficient, and more functional.