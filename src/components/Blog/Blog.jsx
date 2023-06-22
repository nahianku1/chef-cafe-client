import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

function Blog() {
  return (
    <>
      <div className="bg-[url('/images/background.jpg')] h-auto md:h-[400px] bg-cover bg-center ">
        <div className=" flex flex-col gap-[30px] h-[100%] flex-wrap md:flex-nowrap items-center justify-center pb-[60px] md:pb-[0] bg-gradient-to-r dark:from-slate-800 from-lime-400 to-gray-transparent">
          <h1 className="text-center text-6xl dark:text-white  font-bold">
            BLOG PAGE
          </h1>
          <Pdf targetRef={ref} filename="blog-page.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="px-[20px] font-bold text-[15px] py-[10px] rounded-full bg-lime-500"
              >
                Download PDF
              </button>
            )}
          </Pdf>
        </div>
      </div>
      <div
        className="md:mx-[200px] dark:text-white  px-[20px] mb-[60px] "
        ref={ref}
      >
        <h2 className="text-center   my-[70px] text-3xl font-bold">
          Question & Answer Blog
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">
            Q. What are differences between uncontrolled and controlled
            components?
          </h3>
          <p>
            In React uncontrolled components are input elements that are
            controlled by html DOM and uncontrolled components are input
            elements that are controlled by React itself. html DOM maintains its
            own input element's state and update it accordingly. But incase of
            controlled component we declare our own state and update the state
            when user types in. The overall control is in the hand of react.
            That's why it is called controlled component. Another thing is that
            when working with controlled value attribute render a readonly input
            field. When you type in value can't be changed unless you declare
            onChange event handler. But in uncomcontrolled components value
            attribute provides default value. You can still give a default value
            in controlled component by assigning <b>defaultValue</b> attribute.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">
            Q. How to validate React props using PropTypes? 
          </h3>
          <p>
            In React PropTypes are used to validate props. Some time you might
            need to check props as you can pass wrong props to the component
            mistakenly. So it is useful feature. In Earlier react versions it
            was built in React. But now it is separate package and have to be
            installed via npm. The package name is <b>prop-types</b>. First
            install it and import it like{" "}
            <b>import PropTypes from "prop-types"</b>. Then After declaring a
            component function use it like below:
          </p>
          <div className="w-[320px] md:w-[450px] ">
            <img src="/images/code.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-[20px]">
          <h3 className="text-2xl font-bold">
            Q. Tell us the difference between nodejs and express js.
          </h3>
          <p>
            The main basic difference between nodejs and express js is Nodejs is
            javascript runtime environment for server and Expressjs is micro
            framework built on top of Nodejs runtime. Node JS was created Ryan
            Dahl and first introduced in 2009. It is built on top of Google
            chrome V8 Engine which is open source javascript engine written in
            c++ and made by google. Ryan Dahl used it, removed web api from it
            and put his own c++ code. He used <b>libuv</b> package to perform
            low level operating system operations. On the other hand Expressjs
            was created for developing REST API for web applications. It is
            built on top of Nodejs runtime and simplify many operations and
            reduce boilerplate code.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-[20px]">
          <h3 className="text-2xl font-bold">
            Q. What is a custom hook and why will you create a custom hook?
          </h3>
          <p>
            In React custom hooks are hooks we can create ourselves. We can
            create our own custom hooks for reusability and better readability.
            By using custom hook we improve our code quality. For example, We
            can fetch data from external source and we need to use that data
            multiple times. We don't need to write same code again and again.
            Rather we can create our own custom hook and return the data from
            the hook. Then we can use the hook as many time as we wish to.
          </p>
        </div>
      </div>
    </>
  );
}

export default Blog;
