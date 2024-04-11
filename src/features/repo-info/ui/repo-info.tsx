import { Col, Row } from 'antd'

import { useIssuesStore } from '@entities/model'

import { formatNumber } from '@shared/utils'

import StarIcon from './assets/star.svg?react'

export function RepoInfo() {
  const repoInfo = useIssuesStore((state) => state.repoInfo)

  return (
    <>
      {repoInfo && (
        <Col span={24}>
          <Row style={{ alignItems: 'center', gap: 8 }}>
            <a
              href={repoInfo.ownerLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {repoInfo.ownerName}
            </a>

            <span style={{ color: '#0064ef' }}>{' > '}</span>

            <a
              href={repoInfo.repoLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {repoInfo.repoName}
            </a>

            <Row style={{ alignItems: 'center', gap: 4, marginLeft: 16 }}>
              <StarIcon style={{ width: 16, height: 16 }} />
              {`${formatNumber(repoInfo.stars)} stars`}
            </Row>
          </Row>
        </Col>
      )}
    </>
  )
}
