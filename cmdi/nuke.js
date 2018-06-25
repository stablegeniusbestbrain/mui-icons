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
      _react2.default.createElement('path', { d: 'M14 12h-4v-1H5.5C3.6 11 2 9.4 2 7.5S3.6 4 5.5 4c1 0 2 .4 2.6 1.1.4-1.8 2-3.1 3.9-3.1s3.5 1.3 3.9 3.1c.7-.7 1.6-1.1 2.6-1.1C20.4 4 22 5.6 22 7.5S20.4 11 18.5 11H14v1zm-4 4.9v-1.1H5v-2h14v2h-5v1.1l6 2.2c.6.2 1 .7 1 1.4 0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5 0-.7.4-1.2 1-1.4l6-2.2z' })
    )
  );
};

exports.default = Icon;