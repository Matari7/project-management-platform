import React from 'react';
import { useQuery, gql } from '@apollo/client';

/**
 * GraphQL query to fetch projects.
 */
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

/**
 * Component to read and display a list of projects using GraphQL.
 */
const ReadProject = () => {
    // Execute the GET_PROJECTS query and manage the loading, error, and data states
    const { loading, error, data } = useQuery(GET_PROJECTS);

    // Display loading message while the query is in progress
    if (loading) return <p>Loading...</p>;
    // Display error message if the query fails
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {/* Map through the projects and display each one */}
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
