import { Container, Grid, Card, CardContent, Typography, Skeleton, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const AdminDashboard = () => {
  const classes = useStyles()

  // Dummy data for the latest orders
  const latestOrders = [
    { id: 1, customer: 'John Doe', product: 'iPhone 12', quantity: 2, price: 999 },
    { id: 2, customer: 'Jane Smith', product: 'Samsung Galaxy S21', quantity: 1, price: 799 },
    { id: 3, customer: 'Bob Johnson', product: 'Google Pixel 5', quantity: 1, price: 699 },
  ]

  return (
    <AdminLayout>
      <Container className="mt-4">
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Products</Typography>
                <Typography variant="body1" component="p">
                  <Skeleton />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Customers</Typography>
                <Typography variant="body1" component="p">
                  <Skeleton />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Revenue</Typography>
                <Typography variant="body1" component="p">
                  <Skeleton />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Sales</Typography>
                <Typography variant="body1" component="p">
                  <Skeleton />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={12} className={classes.tableContainer}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Latest Orders</Typography>
                <Table>
                  <TableBody>
                    {latestOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </AdminLayout>
  )
}

export default AdminDashboard
