import { Button, Typography, Stack} from '@mui/material'
function FeedbackOptions({ type = 'button', onClickBad, onClickNeutral, onClickGood}) {
  return (
    <Stack direction={'row'} gap={'5px'}>
      <Button variant="contained" type={type} onClick={onClickBad} color='error'>Bad</Button>
      <Button variant="contained" type={type} onClick={onClickNeutral} color='warning'>Neutral</Button>
      <Button variant="contained" type={type} onClick={onClickGood} color='success'>Good</Button>
    </Stack>
  )
}
export default FeedbackOptions;