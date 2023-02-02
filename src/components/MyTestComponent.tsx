import { Box, Typography } from '@mui/material'
import Button from './ButtonComponent/Button'

const MyTestComponent = () => {
  return (
    <Box>
      <Typography variant='h3' sx={{
        color: "yellow",
        textAlign: "left"
      }}>
        Here I am sharing my new learning thing...
      </Typography>
      <Typography variant='h4' sx={{
        color: "aqua",
        textAlign: "left"
      }}>
        How to separate components in an organized way and How to use this properly...
      </Typography>

      <Box sx={{
        marginY: '2rem'
      }}>
        <Typography sx={{
          fontSize: "2rem",
          color: "aqua",
          textAlign: "left"
        }}>
          Here I Import Buttons :
        </Typography>
      </Box>

      {/* Container Button */}

      <Box sx={{
        marginY: '2rem'
      }}>
        <Typography sx={{
          fontSize: "2rem",
          color: "beige",
          textAlign: "left"
        }}>
          I am import Container Button with error color :
        </Typography>
        <Button.ContainedButton buttonName="Submit" color='error' size='medium' />
      </Box>
      <Box sx={{
        marginY: '2rem'
      }}>
        <Typography sx={{
          fontSize: "2rem",
          color: "beige",
          textAlign: "left"
        }}>
          I am import Container Button with success color :
        </Typography>
        <Button.ContainedButton buttonName="Submit" color='success' size='medium' />
      </Box>

      {/* Outline button */}

      <Box sx={{
        marginY: '2rem'
      }}>
        <Typography sx={{
          fontSize: "2rem",
          color: "beige",
          textAlign: "left"
        }}>Here I am import OutLine Button with secondary color : </Typography>

        <Button.OutLineButton buttonName="Share" color='secondary' size='medium' />
      </Box>
      <Box sx={{
        marginY: '2rem'
      }}>
        <Typography sx={{
          fontSize: "2rem",
          color: "beige",
          textAlign: "left"
        }}>Here I am import OutLine Button with warning color :</Typography>

        <Button.OutLineButton buttonName="Share" color='warning' size='medium' />
      </Box>
    </Box>
  )
}

export default MyTestComponent