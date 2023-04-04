import './gallery.js';
import './form.js';
import { renderThumbnails } from './thumbnail.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

try {
  const data = await getData();
  renderThumbnails(data);
} catch (err) {
  showAlert(err.message);
}
