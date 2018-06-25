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
        _react2.default.createElement('path', { d: 'M256 228.72c-22.88 0-41.597 18.528-41.597 41.18 0 22.65 18.718 41.18 41.597 41.18 22.878 0 41.597-18.528 41.597-41.18s-18.72-41.18-41.597-41.18zm124.8 41.178c0-67.946-56.163-123.54-124.8-123.54S131.2 201.953 131.2 269.9c0 45.303 24.96 85.447 62.396 107.072l20.807-36.032c-24.972-14.417-41.604-40.153-41.604-71.04 0-45.295 37.432-82.358 83.2-82.358 45.77 0 83.2 37.063 83.2 82.358 0 30.887-16.632 56.623-41.603 71.04l20.807 36.032c37.433-21.624 62.396-61.77 62.396-107.072zM256 64C141.597 64 48 156.654 48 269.898 48 346.085 89.592 411.968 152 448l20.8-36.032c-49.92-28.824-83.208-81.324-83.208-142.07 0-90.592 74.89-164.717 166.408-164.717 91.517 0 166.406 74.126 166.406 164.72 0 60.744-33.284 114.27-83.205 142.068L360 448c62.406-36.032 104-101.915 104-178.102C464 156.654 370.403 64 256 64z' })
      )
    )
  );
};

exports.default = Icon;