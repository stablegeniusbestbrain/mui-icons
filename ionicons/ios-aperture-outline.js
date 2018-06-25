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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256c0 65.5 30.3 123.9 77.6 162.1l-.6 1.1 8.3 4.8c34.4 25.2 76.8 40 122.7 40 114.9 0 208-93.1 208-208S370.9 48 256 48zm176.9 133.3c10 23.7 15.1 48.8 15.1 74.7 0 5.4-.2 10.7-.7 16H284.5l94.4-163.5c4.4 3.7 8.7 7.6 12.9 11.7 17.6 17.7 31.4 38.2 41.1 61.1zM237 257.1l9.9-17.1h18.7l9.4 16.4-9 15.6h-20.4l-8.6-14.9zm93.7-178c12.5 5.3 24.3 11.9 35.4 19.6l-81.8 141.7-95-164.5C210.6 68 233 64 256 64c25.9 0 51.1 5.1 74.7 15.1zm-210.5 41.1c15.9-15.9 34.1-28.7 54.2-38.1l82 141.9H66.7c2.5-14.7 6.6-28.9 12.4-42.7 9.7-22.9 23.5-43.4 41.1-61.1zm0 271.6c-17.6-17.6-31.5-38.2-41.2-61-9.9-23.7-15-48.9-15-74.8 0-5.4.2-10.7.7-16h163.8l-94.7 164c-4.7-3.8-9.2-7.9-13.6-12.2zm61.1 41.1c-12.3-5.2-23.9-11.6-34.7-19.1l81.2-140.7L322 436.3c-21.1 7.7-43.3 11.7-66 11.7-25.9 0-51.1-5.1-74.7-15.1zm210.5-41.1c-16 16-34.4 28.9-54.8 38.4L254.9 288h190.5c-2.5 14.7-6.6 28.9-12.4 42.7-9.8 22.9-23.6 43.4-41.2 61.1z' })
      )
    )
  );
};

exports.default = Icon;