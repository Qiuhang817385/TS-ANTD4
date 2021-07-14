export const dataSource = [
  // ---------------------// ============================================================
  {
    clusterName: 'ob22x',
    clusterPathName: '/cluster/2',
    name: 'oracle',
    tenantPathName: '/cluster/2/tenant/17',
  },
  {
    clusterName: 'ob22x',
    clusterPathName: '/cluster/2',
    name: 'mysql',
    tenantPathName: '/cluster/2/tenant/15',
  },
  {
    clusterName: 'ob22x',
    clusterPathName: '/cluster/2',
    name: 'sys',
    tenantPathName: '/cluster/2/tenant/1',
  },
  // ---------------------// ============================================================
  {
    clusterName: 'ob227',
    clusterPathName: '/cluster/3',
    name: 'test',
    tenantPathName: '/cluster/3/tenant/19',
  },
  {
    clusterName: 'ob227',
    clusterPathName: '/cluster/3',
    name: 'mysql',
    tenantPathName: '/cluster/3/tenant/14',
  },
  {
    clusterName: 'ob227',
    clusterPathName: '/cluster/3',
    name: 'sys',
    tenantPathName: '/cluster/3/tenant/2',
  },
  // ---------------------// ============================================================
  {
    clusterName: 'ob229',
    clusterPathName: '/cluster/4',
    name: 'oracle',
    tenantPathName: '/cluster/4/tenant/18',
  },
  {
    clusterName: 'ob229',
    clusterPathName: '/cluster/4',
    name: 'mysql',
    tenantPathName: '/cluster/4/tenant/16',
  },
  {
    clusterName: 'ob229',
    clusterPathName: '/cluster/4',
    name: 'sys',
    tenantPathName: '/cluster/4/tenant/6',
  },
]

export interface dataProps {
  clusterPathName: string
  clusterName: string
  name: string
  tenantPathName: string
}
