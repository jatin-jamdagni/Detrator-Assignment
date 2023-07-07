"use client"
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { ProductCardProps } from '@/types';
import { Collapse, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled(({ expand, ...other }: any) => {

    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProductCard({ title, description, rating, count, image, price, category }: ProductCardProps) {


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={title}
                subheader={category}
            />
            <CardMedia
                component="img"
                height="142"
                sx={{ objectFit: "contain" }}
                image={image}
                alt="Product Image"
            />
            <CardActions disableSpacing>
                {`Price : ${price} `}
                {`Rating: ${rating} `}
                {`Reviews: ${count} `}
            </CardActions>
            <CardActions disableSpacing>
                <Typography>Description</Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {description}
                </CardContent>
            </Collapse>
        </Card>
    );
}