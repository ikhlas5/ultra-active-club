import React from 'react';

const Qus = () => {
    return (
        <div className='m-5'>
            <div><h1 className='text-center font-bold text-orange-600 m-10 text-4xl'>Answer to the Question</h1></div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
            <div className="collapse-title text-xl font-medium">
               1. How does react work?
            </div>
            <div className="collapse-content"> 
                <p>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
            <div className="collapse-title text-xl font-medium">
                2.What is the difference between props and state?
            </div>
            <div className="collapse-content"> 
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component..</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
            <div className="collapse-title text-xl font-medium">
                3.What else is useeffect used for other than loading data?
            </div>
            <div className="collapse-content"> 
                <p>Ans: As we will see later, the useEffect Hook fosters separation of concerns and reduces code duplication. For example, the official React docs show that you can avoid the duplicated code that results from lifecycle methods with one useEffect statement.</p>
            </div>
            </div>
        </div>
    );
};

export default Qus;