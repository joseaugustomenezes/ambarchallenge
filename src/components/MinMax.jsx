import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './MinMax.css';

const MinMax = ({min, max}) => (
  <div className="min-max">
    {min && max &&
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="textPrimary">
            Máxima: {max.local}: {max.temp} °C
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Mínima: {min.local}: {min.temp} °C
          </Typography>
        </CardContent>
      </Card>
    }
    <Button
      variant="contained"
      color="primary">
      <Link to="/">Voltar</Link>
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  min: state.min,
  max: state.max
});

export default connect(mapStateToProps)(MinMax);