import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PROJECTS = gql`
    query GetProjects {
        getProjects {
            id
            name
            description
            user_id
        }
    }
`;

const ReadProject = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {data.getProjects.map((project) => (
                    <li key={project.id}>
                        <p><strong>Name:</strong> {project.name}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                        <p><strong>User ID:</strong> {project.user_id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadProject;
