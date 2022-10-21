import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShare, FaStar } from "react-icons/fa";

const NewsSummary = ({ news }) => {
    const { author, _id, details, image_url: thumb, title, total_view: total, } = news;
    const { published_date: date, img, name } = author;


    console.log(news);
    return (
        <div>
            <Card className="mb-5">
                <Card.Header style={{ backgroundColor: 'cyan' }} className='p-2'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Image
                                roundedCircle
                                src={img}
                                style={{ height: '60px' }}
                            ></Image>
                            <div className='ms-3'>
                                <p className='mb-0'>{name}</p>
                                <p>{date}</p>
                            </div>

                        </div>

                        <div>
                            <FaBookmark className='me-3'></FaBookmark>
                            <FaShare className='me-3'></FaShare>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={thumb} />
                    <Card.Text className='mt-4'>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}><small>Read More</small></Link> </p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between text-primary'>
                        <span><FaStar></FaStar></span>
                        <span>{total}</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummary;