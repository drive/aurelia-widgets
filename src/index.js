export * from './lookup-widget';
export * from './lookup-models';

import {LookupWidget} from './lookup-widget';

export function install(aurelia)
{
	aurelia.withResources(LookupWidget);
}