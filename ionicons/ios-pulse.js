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
        _react2.default.createElement('path', { d: 'M448 273c-21.27 0-39.296 14-45.596 33h-38.857l-28.36-85.417a16 16 0 0 0-15.184-10.956c-.112 0-.224 0-.335.004a15.997 15.997 0 0 0-15.05 11.59l-44.483 155.26-52.353-314.107C206.535 54.893 200.332 48 192 48s-13.693 5.776-15.525 13.135L115.495 306H16v32h112c7.348 0 13.75-5.004 15.525-12.135l45.368-182.177 51.324 307.94c1.23 7.377 7.397 11.92 14.864 12.344.31.018.615.028.92.028 7.097 0 13.406-3.7 15.38-10.594l49.745-173.617 15.69 47.25A16 16 0 0 0 352 338h51.108c6.865 18 24.37 31 44.892 31 26.51 0 48-22.492 48-49 0-26.51-21.49-47-48-47z' })
      )
    )
  );
};

exports.default = Icon;