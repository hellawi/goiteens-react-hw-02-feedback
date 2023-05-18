import { Alert } from '@mui/material'
function Notification({ message }) {
  return (
    <div>
        <Alert severity="warning" sx={{marginTop:'24px'}}>{message}</Alert>
    </div>
  )
}
export default Notification;