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
      _react2.default.createElement('path', { d: 'M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-5 8c0-.8.2-1.6.6-2.3l6.7 6.7c-.7.4-1.5.6-2.3.6-2.8 0-5-2.2-5-5zm9.4 2.3L9.7 7.6c.7-.4 1.5-.6 2.3-.6 2.8 0 5 2.2 5 5 0 .8-.2 1.6-.6 2.3z' })
    )
  );
};

exports.default = Icon;