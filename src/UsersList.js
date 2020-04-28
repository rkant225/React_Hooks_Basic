import React from 'react';
import useResource from './Shared/useResourceHook';

const UsersList =(props) =>{
    const resources = useResource(props.keyWord);
    return(
        <div>
            <ol>
                {resources && resources.data.length > 0 && resources.data.map(resource => {
                    return <li key={resource.id}>{resource.name}</li>
                })}
            </ol>
        </div>
    );
}

export default UsersList;