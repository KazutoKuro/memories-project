import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typograhpy } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAl';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';
const Post = ({ post })=> { // { } is equal to props
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typograhpy variant="h6">{post.creator}</Typograhpy>
                <Typograhpy variant="body2">{moment(post.createdAt).fromNow()}</Typograhpy>
            </div>
            <div className={classes.overlay2}>
                <button style={{color: 'white'}} size="small" onClick={()=> {}} >
                    <MoreHorizIcon fontSize="default" />
                </button>
            </div>
            <div className={classes.details}>
                <Typograhpy variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tags} `)}</Typograhpy>
            </div>
            <CardContent>
                <Typograhpy className={classes.title} variant="h5" gutterBottom>{post.message}</Typograhpy>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary" onClick={() => }>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => }>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
            

        </Card>
    )
}

export default Post;