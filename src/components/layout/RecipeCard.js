import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

const getStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16.9
  }
})

const RecipeCard = props => {
  const classes = getStyles()

  const { id, label, image, source, uri } = props
  return (
    <Card key={id}>
      <CardMedia className={classes.media} image={image} label={label} />
      <CardActions>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
