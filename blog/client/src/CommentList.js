import React, { useState, useEffect } from 'react';

export default ({ comments }) => {
    const renderedComments = Object.values(comments).map(comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This is pending';
        }

        if (comment.status === 'rejected') {
            content = 'This is rejected';
        }

        return <li key={comment.id}>{content}</li>
    })

    return <div>
        {renderedComments}
    </div>;
};