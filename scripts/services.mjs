import Header from '../components/Header.mjs';
import { services } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: services, container });

header.init();
