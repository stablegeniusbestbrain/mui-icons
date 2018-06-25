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
        _react2.default.createElement('path', { d: 'M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm135.765 359.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64s99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765z' }),
        _react2.default.createElement('path', { d: 'M200.043 106.067c-40.63 15.17-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288c2.1-10.34 3.203-21.04 3.203-32 0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zm-52.824-153.605C332.007 110.46 295.693 96 256 96c-7.966 0-15.794.59-23.448 1.715L310.852 224l49.12-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.64 12.324 70.394 33.04 97.366L201 224H99.204zM311.96 405.932c40.63-15.17 73.432-46.382 90.714-85.932H256l55.96 85.932zM152.046 377.62C180.01 401.546 216.314 416 256 416c7.97 0 15.8-.592 23.456-1.716L201.164 288l-49.118 89.62z' })
      )
    )
  );
};

exports.default = Icon;