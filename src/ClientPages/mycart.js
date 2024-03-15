import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import session from '../helpers/session';

if (!session()) {
    window.location.href = '/loginClient';
  }