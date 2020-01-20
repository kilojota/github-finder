import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext); // All we need to do in order to use some action is bring in the github context like so, and then use it with githubContext.[nameofunction]
    const alertContext = useContext(AlertContext); // All we need to do in order to use some action is bring in the github context like so, and then use it with githubContext.[nameofunction]

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input
                    type='text'
                    name='text'
                    placeholder='Search users...'
                    value={text}
                    onChange={onChange}
                />
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length > 0 && (
                <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
