import { Row, Col } from 'antd'

import './main-page.css'

import { EnterUrlForm } from '@widgets/enter-url-form'
import { Issues } from '@widgets/issues'

import { RepoInfo } from '@features/repo-info'

import { useIssuesStore } from '@entities/model'

export function MainPage() {
  const noIssues = useIssuesStore((state) => state.noIssues)

  return (
    <>
      <Row gutter={[0, 16]}>
        <EnterUrlForm />
        <RepoInfo />

        <Col span={24}>
          <Row gutter={16} style={{ marginLeft: 0, marginRight: 0 }}>
            {noIssues ? 'No issues yet' : <Issues />}
          </Row>
        </Col>
      </Row>
    </>
  )
}
