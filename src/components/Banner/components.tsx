import * as React from 'react';
import { styled } from '@mui/system';
import { colorPalette } from '../../styleConstants';

export const BannerComp = styled('div')({
    backgroundColor: colorPalette.silver_lake_blue.DEFAULT,
    textAlign: 'center',
    padding: 15
});