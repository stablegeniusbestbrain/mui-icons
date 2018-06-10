'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M256 48C141.137 48 48 141.136 48 256s93.137 208 208 208c114.87 0 208-93.138 208-208S370.87 48 256 48zm124.797 352.032a191.72 191.72 0 0 1-12.942 10.272c-21.704-50.015-50.938-95.795-87.168-136.465a530.98 530.98 0 0 1-48.156 44.28c27.66 35.363 44.917 79.253 47.19 127.068a191.17 191.17 0 0 1-15.944 1.303c-1.103-24.726-6.5-48.72-16.114-71.45a206.935 206.935 0 0 0-27.68-47.036 527.798 527.798 0 0 1-100.91 60.526A192.37 192.37 0 0 1 107.957 376c36.28-16.133 70.29-36.27 101.705-60.185a212.54 212.54 0 0 0-6.584-6.895c-19.107-19.107-41.354-34.107-66.12-44.583-22.015-9.312-46.212-14.964-71.45-16.108a191.45 191.45 0 0 1 1.303-15.96c61.62 2.93 116.714 30.753 155.45 73.638a518.323 518.323 0 0 0 39.78-35.87 529.307 529.307 0 0 0 7.81-7.988 526.564 526.564 0 0 0-9.81-10.09c-45.888-45.886-99.138-82.145-158.333-107.832a191.982 191.982 0 0 1 10.272-12.94c63.95 28.388 121.21 69.102 168.766 119.133a513.127 513.127 0 0 0 30.32-36.964c-40.348-37.27-66.957-89.188-71.39-147.312a192.21 192.21 0 0 1 15.99-.702c1.74 22.238 6.975 43.838 15.672 64.4 10.476 24.768 25.476 47.014 44.583 66.12 1.5 1.5 3.026 2.966 4.563 4.414 20.226-29.03 37.38-60.104 51.287-92.987.285-.675.555-1.354.835-2.03 4.42 3.427 8.68 7.043 12.78 10.836a527.127 527.127 0 0 1-52.823 94.716 206.91 206.91 0 0 0 49.48 29.635c20.63 8.727 42.304 13.978 64.62 15.698a191.785 191.785 0 0 1-.69 15.99c-46.277-3.478-88.63-21.017-122.8-48.358a530.62 530.62 0 0 1-31.556 38.336c36.475 40.77 66.69 87.247 89.18 137.92z' })
      )
    )
  );
};

exports.default = Icon;