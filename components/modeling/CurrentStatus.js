import * as React from 'react';
import {theme} from '../../styles';

import {CurrentDate} from './CurrentDate';
import {CurrentScenario} from './CurrentScenario';
import {useModelState} from './useModelState';
import {InlineData} from '../content';
import {formatFixedDate} from '../../lib/format';

export function CurrentStatus({date = false}) {
  const {location} = useModelState();
  return (
    <span>
      {date ? (
        <>
          <CurrentDate format={formatFixedDate} /> in{' '}
        </>
      ) : (
        ''
      )}
      {location.name} with <CurrentScenario />
    </span>
  );
}
