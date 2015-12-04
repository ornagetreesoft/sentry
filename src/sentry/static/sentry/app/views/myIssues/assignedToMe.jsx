import React from 'react';

import OrganizationIssueList from '../../components/organizationIssueList';

const AssignedToMe = React.createClass({
  getEndpoint() {
    return `/organizations/${this.props.params.orgId}/members/me/issues/assigned/`;
  },

  getTitle() {
    return 'Assigned to Me';
  },

  render() {
    return (
      <OrganizationIssueList
        title={this.getTitle()}
        endpoint={this.getEndpoint()}
        {...this.props} />
    );
  },
});

export default AssignedToMe;