import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.user}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard