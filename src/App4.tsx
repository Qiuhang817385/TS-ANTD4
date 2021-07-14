import { Avatar, Button, List, Form, Table, Row, Col, Menu, Anchor } from 'antd'
import React, { useEffect, useState } from 'react'
// import { columns, data } from './data'
import { omit } from 'lodash';
import Analyze from './component/Analyze'
import { exportElement } from './util/index'
import Logon from './component/Analyze/Logon';
import TreeDemo from './component/TreeDemo';
import ReactTable from './component/ReactTable';
import './App.css'
import './App3.scss'

const { Link } = Anchor

function App() {

  const a = {
    "ServerInfoList": [
      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.93",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 1,
        "snapshotId": 55,
        "startServiceTime": "2021-02-05T10:49:19+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": false,
        "zone": "zone3"
      },
      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.92",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 2,
        "snapshotId": 55,
        "startServiceTime": "2021-02-05T10:49:20+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": false,
        "zone": "zone2"
      },

      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.91",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 3,
        "snapshotId": 55,
        "startServiceTime": "2021-02-05T10:49:41+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": true,
        "zone": "zone1"
      },
      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.93",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 1,
        "snapshotId": 58,
        "startServiceTime": "2021-02-05T10:49:19+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": false,
        "zone": "zone3"
      },
      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.92",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 2,
        "snapshotId": 58,
        "startServiceTime": "2021-02-05T10:49:20+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": false,
        "zone": "zone2"
      },
      {
        "cpuAssigned": 4.0,
        "diskInUsed": 346030080,
        "innerStatus": "ACTIVE",
        "ip": "11.158.97.91",
        "lastOfflineTime": "1970-01-01T08:00+08:00",
        "memoryAssigned": 42949672960,
        "port": 2882,
        "serverId": 3,
        "snapshotId": 58,
        "startServiceTime": "2021-02-05T10:49:41+08:00",
        "totalCpu": 6.0,
        "totalDisk": 1428076625920,
        "totalMemory": 42949672960,
        "withRootserver": true,
        "zone": "zone1"
      }],
    "sysStatList": [],
    "clusterInfoList": [{
      "clusterCreateTime": "2021-03-12T11:46:48+08:00",
      "clusterName": "ob227",
      "endCompactionTime": "2021-03-16T02:00:45+08:00",
      "endIntervalTime": 1615867987,
      "obClusterId": 1,
      "obVersion": "2.2.74",
      "serverCount": 3,
      "snapshotId": 55,
      "startCompactionTime": "2021-03-16T02:00:20+08:00",
      "tenantCount": 2,
      "type": "PRIMARY"
    },
    {
      "clusterCreateTime": "2021-03-12T11:46:48+08:00",
      "clusterName": "ob227",
      "endCompactionTime": "2021-03-16T02:00:45+08:00",
      "endIntervalTime": 1615868595,
      "obClusterId": 1,
      "obVersion": "2.2.74",
      "serverCount": 3,
      "snapshotId": 58,
      "startCompactionTime": "2021-03-16T02:00:20+08:00",
      "tenantCount": 2,
      "type": "PRIMARY"
    }],
    "tenantInfoList": []
  }

  const b = a['ServerInfoList'];


  const abc = {
    "tenantInfoList": [
      {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "MYSQL",
        "name": "sys",
        "obTenantId": 1,
        "primaryZone": "zone1;zone2;zone3",
        "serverListStr": "11.158.97.93,11.158.97.91,11.158.97.92",
        "snapshotId": 58,
        "unitConfigStr": "2C8G ~ 2C8G * 1,3C12G ~ 3C12G * 1,1.5C6G ~ 1.5C6G * 1"
      },
      {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "ORACLE",
        "name": "bar",
        "obTenantId": 1002,
        "primaryZone": "RANDOM",
        "serverListStr": "11.158.97.92,11.158.97.91,11.158.97.93",
        "snapshotId": 58,
        "unitConfigStr": "1.5C6G ~ 1.5C6G * 3"
      },
      {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "MYSQL",
        "name": "foo",
        "obTenantId": 1003,
        "primaryZone": "RANDOM",
        "serverListStr": "11.158.97.93,11.158.97.91,11.158.97.92",
        "snapshotId": 58,
        "unitConfigStr": "1.5C6G ~ 1.5C6G * 3"
      }, {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "MYSQL",
        "name": "sys",
        "obTenantId": 1,
        "primaryZone": "zone1;zone2;zone3",
        "serverListStr": "11.158.97.93,11.158.97.91,11.158.97.92",
        "snapshotId": 59,
        "unitConfigStr": "2C8G ~ 2C8G * 1,3C12G ~ 3C12G * 1,1.5C6G ~ 1.5C6G * 1"
      }, {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "ORACLE",
        "name": "bar",
        "obTenantId": 1002,
        "primaryZone": "RANDOM",
        "serverListStr": "11.158.97.92,11.158.97.91,11.158.97.93",
        "snapshotId": 59,
        "unitConfigStr": "1.5C6G ~ 1.5C6G * 3"
      },
      {
        "locality": "FULL{1}@zone1, FULL{1}@zone2, FULL{1}@zone3",
        "mode": "MYSQL",
        "name": "foo",
        "obTenantId": 1003,
        "primaryZone": "RANDOM",
        "serverListStr": "11.158.97.93,11.158.97.91,11.158.97.92",
        "snapshotId": 59,
        "unitConfigStr": "1.5C6G ~ 1.5C6G * 3"
      }],
    "clusterInfoList": [{
      "clusterCreateTime": "2021-04-05T15:22:40+08:00",
      "clusterName": "ob227",
      "endCompactionTime": "2021-04-07T02:00:50+08:00",
      "endIntervalTime": 1617796805,
      "obClusterId": 1,
      "obVersion": "2.2.74",
      "serverCount": 3,
      "snapshotId": 58,
      "startCompactionTime": "2021-04-07T02:00:20+08:00",
      "tenantCount": 3,
      "type": "PRIMARY"
    },
    {
      "clusterCreateTime": "2021-04-05T15:22:40+08:00",
      "clusterName": "ob227",
      "endCompactionTime": "2021-04-07T02:00:50+08:00",
      "endIntervalTime": 1617800405, "obClusterId": 1,
      "obVersion": "2.2.74",
      "serverCount": 3,
      "snapshotId": 59,
      "startCompactionTime": "2021-04-07T02:00:20+08:00",
      "tenantCount": 3,
      "type": "PRIMARY"
    }],
    "ServerInfoList": [{
      "cpuAssigned": 5.00,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.93", "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 1,
      "snapshotId": 58,
      "startServiceTime": "2021-02-05T10:49:19+08:00",
      "totalCpu": 6.00,
      "totalDisk": 1428076625920,
      "totalMemory": 42949672960,
      "withRootserver": false,
      "zone": "zone3"
    },
    {
      "cpuAssigned": 4.50,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.92",
      "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 2,
      "snapshotId": 58,
      "startServiceTime": "2021-02-05T10:49:20+08:00",
      "totalCpu": 6.00,
      "totalDisk": 1428076625920, "totalMemory": 42949672960, "withRootserver": false, "zone": "zone2"
    }, {
      "cpuAssigned": 6.00,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.91",
      "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 3,
      "snapshotId": 58,
      "startServiceTime": "2021-04-02T21:02:45+08:00",
      "totalCpu": 6.00,
      "totalDisk": 1428076625920,
      "totalMemory": 42949672960,
      "withRootserver": true,
      "zone": "zone1"
    },
    {
      "cpuAssigned": 5.00,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.93",
      "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 1,
      "snapshotId": 59, "startServiceTime": "2021-02-05T10:49:19+08:00", "totalCpu": 6.00, "totalDisk": 1428076625920, "totalMemory": 42949672960, "withRootserver": false, "zone": "zone3"
    }, {
      "cpuAssigned": 4.50,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.92",
      "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 2,
      "snapshotId": 59,
      "startServiceTime": "2021-02-05T10:49:20+08:00",
      "totalCpu": 6.00,
      "totalDisk": 1428076625920,
      "totalMemory": 42949672960,
      "withRootserver": false,
      "zone": "zone2"
    },
    {
      "cpuAssigned": 6.00,
      "diskInUsed": 369098752,
      "innerStatus": "ACTIVE",
      "ip": "11.158.97.91",
      "lastOfflineTime": "1970-01-01T08:00:00+08:00",
      "memoryAssigned": 42949672960,
      "port": 2882,
      "serverId": 3,
      "snapshotId": 59,
      "startServiceTime": "2021-04-02T21:02:45+08:00",
      "totalCpu": 6.00,
      "totalDisk": 1428076625920,
      "totalMemory": 42949672960,
      "withRootserver": true,
      "zone": "zone1"
    }],
    "sysStatList": [{
      "avgValuePerSecond": 8.29,
      "endValuePerSecond": 8.00,
      "maxValuePerSecond": 11.00,
      "minValuePerSecond": 8.00,
      "obTenantId": 1,
      "startValuePerSecond": 9.00,
      "statName": "active_session",
      "timeOfMaxValuePerSecond": 1617795960,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 141.00
    },
    {
      "avgValuePerSecond": 421741.75,
      "endValuePerSecond": 425832.55,
      "maxValuePerSecond": 425832.55,
      "minValuePerSecond": 416591.32,
      "obTenantId": 1,
      "startValuePerSecond": 420900.13,
      "statName": "db_cpu",
      "timeOfMaxValuePerSecond": 1617796800,
      "timeOfMinValuePerSecond": 1617795720,
      "totalValue": 7169609.83
    },
    {
      "avgValuePerSecond": 901.66,
      "endValuePerSecond": 763.88,
      "maxValuePerSecond": 1225.88,
      "minValuePerSecond": 745.98,
      "obTenantId": 1,
      "startValuePerSecond": 745.98,
      "statName": "logical_reads",
      "timeOfMaxValuePerSecond": 1617796740,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 15328.29
    },
    {
      "avgValuePerSecond": 965.09,
      "endValuePerSecond": 822.32,
      "maxValuePerSecond": 1367.55,
      "minValuePerSecond": 804.78,
      "obTenantId": 1,
      "startValuePerSecond": 804.78,
      "statName": "physical_reads",
      "timeOfMaxValuePerSecond": 1617796740,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 16406.53
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "rollbacks",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "rollback_rt",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 268544.37,
      "endValuePerSecond": 275373.47,
      "maxValuePerSecond": 319346.45,
      "minValuePerSecond": 261652.10,
      "obTenantId": 1,
      "startValuePerSecond": 265194.37,
      "statName": "rpc_packet_in_bytes",
      "timeOfMaxValuePerSecond": 1617796740,
      "timeOfMinValuePerSecond": 1617796620,
      "totalValue": 4565254.37
    },
    {
      "avgValuePerSecond": 7.55,
      "endValuePerSecond": 8.45,
      "maxValuePerSecond": 9.46,
      "minValuePerSecond": 6.76,
      "obTenantId": 1,
      "startValuePerSecond": 7.69,
      "statName": "rpc_packet_in_rt",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617795660,
      "totalValue": 128.40
    },
    {
      "avgValuePerSecond": 1926223.82,
      "endValuePerSecond": 1928785.92,
      "maxValuePerSecond": 2001126.35,
      "minValuePerSecond": 1909207.98,
      "obTenantId": 1,
      "startValuePerSecond": 1922368.32,
      "statName": "rpc_packet_out_bytes",
      "timeOfMaxValuePerSecond": 1617796740,
      "timeOfMinValuePerSecond": 1617796020,
      "totalValue": 32745804.92
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "sql_delete_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 1.26,
      "endValuePerSecond": 1.28,
      "maxValuePerSecond": 1.45,
      "minValuePerSecond": 0.55,
      "obTenantId": 1,
      "startValuePerSecond": 1.08,
      "statName": "sql_distributed_count",
      "timeOfMaxValuePerSecond": 1617795720,
      "timeOfMinValuePerSecond": 1617796500,
      "totalValue": 18.84
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "sql_insert_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 55.69,
      "endValuePerSecond": 55.35,
      "maxValuePerSecond": 70.27,
      "minValuePerSecond": 21.33,
      "obTenantId": 1,
      "startValuePerSecond": 46.15,
      "statName": "sql_local_count",
      "timeOfMaxValuePerSecond": 1617796020,
      "timeOfMinValuePerSecond": 1617796500,
      "totalValue": 835.28
    },
    {
      "avgValuePerSecond": 0.34,
      "endValuePerSecond": 0.28,
      "maxValuePerSecond": 0.50,
      "minValuePerSecond": 0.13,
      "obTenantId": 1,
      "startValuePerSecond": 0.28,
      "statName": "sql_remote_count",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617796500,
      "totalValue": 5.03
    },
    {
      "avgValuePerSecond": 8.30,
      "endValuePerSecond": 8.65,
      "maxValuePerSecond": 8.88,
      "minValuePerSecond": 3.53,
      "obTenantId": 1,
      "startValuePerSecond": 7.15,
      "statName": "sql_select_count",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617796500,
      "totalValue": 124.56
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "sql_update_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "tps",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1,
      "startValuePerSecond": 0.00,
      "statName": "tps_rt",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "active_session",
      "timeOfMaxValuePerSecond": 1617795480,
      "timeOfMinValuePerSecond": 1617795480,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "db_cpu",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 9.60,
      "endValuePerSecond": 9.60,
      "maxValuePerSecond": 9.60,
      "minValuePerSecond": 9.60,
      "obTenantId": 1002,
      "startValuePerSecond": 9.60,
      "statName": "logical_reads",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 163.20
    },
    {
      "avgValuePerSecond": 9.60,
      "endValuePerSecond": 9.60,
      "maxValuePerSecond": 9.60,
      "minValuePerSecond": 9.60,
      "obTenantId": 1002,
      "startValuePerSecond": 9.60,
      "statName": "physical_reads",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 163.20
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "rollbacks",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002, "startValuePerSecond": 0.00,
      "statName": "rollback_rt",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 12862.64,
      "endValuePerSecond": 12863.85,
      "maxValuePerSecond": 12921.33,
      "minValuePerSecond": 12846.67,
      "obTenantId": 1002,
      "startValuePerSecond": 12856.77,
      "statName": "rpc_packet_in_bytes",
      "timeOfMaxValuePerSecond": 1617796740,
      "timeOfMinValuePerSecond": 1617796260,
      "totalValue": 218664.87
    },
    {
      "avgValuePerSecond": 74.63,
      "endValuePerSecond": 84.21,
      "maxValuePerSecond": 99.02,
      "minValuePerSecond": 65.72,
      "obTenantId": 1002,
      "startValuePerSecond": 70.47,
      "statName": "rpc_packet_in_rt",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617796200,
      "totalValue": 1268.69
    },
    {
      "avgValuePerSecond": 10925.15,
      "endValuePerSecond": 10930.05,
      "maxValuePerSecond": 10935.38,
      "minValuePerSecond": 10913.90,
      "obTenantId": 1002,
      "startValuePerSecond": 10922.98,
      "statName": "rpc_packet_out_bytes",
      "timeOfMaxValuePerSecond": 1617796200,
      "timeOfMinValuePerSecond": 1617796260,
      "totalValue": 185727.62
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_delete_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_distributed_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_insert_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_local_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_remote_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_select_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "sql_update_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "tps",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1002,
      "startValuePerSecond": 0.00,
      "statName": "tps_rt",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "active_session",
      "timeOfMaxValuePerSecond": 1617795480,
      "timeOfMinValuePerSecond": 1617795480,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "db_cpu",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 10.22,
      "endValuePerSecond": 9.72,
      "maxValuePerSecond": 16.23,
      "minValuePerSecond": 9.45,
      "obTenantId": 1003,
      "startValuePerSecond": 9.83,
      "statName": "logical_reads",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617795720,
      "totalValue": 173.80
    },
    {
      "avgValuePerSecond": 10.22,
      "endValuePerSecond": 9.72,
      "maxValuePerSecond": 16.22,
      "minValuePerSecond": 9.43,
      "obTenantId": 1003,
      "startValuePerSecond": 9.83,
      "statName": "physical_reads",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617795720,
      "totalValue": 173.77
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "rollbacks",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "rollback_rt",
      "timeOfMaxValuePerSecond": 1617795600,
      "timeOfMinValuePerSecond": 1617795600,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 13192.03,
      "endValuePerSecond": 13043.78,
      "maxValuePerSecond": 13576.03,
      "minValuePerSecond": 12914.45,
      "obTenantId": 1003,
      "startValuePerSecond": 13142.98,
      "statName": "rpc_packet_in_bytes",
      "timeOfMaxValuePerSecond": 1617795660,
      "timeOfMinValuePerSecond": 1617795720,
      "totalValue": 224264.47
    },
    {
      "avgValuePerSecond": 70.61,
      "endValuePerSecond": 72.29,
      "maxValuePerSecond": 84.21,
      "minValuePerSecond": 66.47,
      "obTenantId": 1003,
      "startValuePerSecond": 69.69,
      "statName": "rpc_packet_in_rt",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617796680,
      "totalValue": 1200.39
    },
    {
      "avgValuePerSecond": 10981.01,
      "endValuePerSecond": 10953.47,
      "maxValuePerSecond": 11249.68,
      "minValuePerSecond": 10755.30,
      "obTenantId": 1003,
      "startValuePerSecond": 10961.33,
      "statName": "rpc_packet_out_bytes",
      "timeOfMaxValuePerSecond": 1617795840,
      "timeOfMinValuePerSecond": 1617795720,
      "totalValue": 186677.23
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_delete_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_distributed_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_insert_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_local_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_remote_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_select_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "sql_update_count",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    },
    {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "tps",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    }, {
      "avgValuePerSecond": 0.00,
      "endValuePerSecond": 0.00,
      "maxValuePerSecond": 0.00,
      "minValuePerSecond": 0.00,
      "obTenantId": 1003,
      "startValuePerSecond": 0.00,
      "statName": "tps_rt",
      "timeOfMaxValuePerSecond": 1617795540,
      "timeOfMinValuePerSecond": 1617795540,
      "totalValue": 0.00
    }]
  }


  const transform = (array: Array<any>, key: string, sameKey: string, dontNeedTransform: string[] = [key, sameKey]) => {
    const snapshotIds = array.reduce((res: Array<any>, item: any) => {
      if (!res.includes(item[key])) {
        res.push(item[key])
      }
      return res
    }, [])

    const startSnapshotId = snapshotIds && snapshotIds[0];
    const endSnapshotId = snapshotIds && snapshotIds[1];

    const depsKey = array.reduce((res: Array<any>, item: any) => {
      if (!res.includes(item[sameKey])) {
        res.push(item[sameKey])
      }
      return res
    }, [])

    const start = array.filter((item: any) => item?.snapshotId === startSnapshotId)
    const end = array.filter((item: any) => item?.snapshotId === endSnapshotId)

    start.map(item => {
      const newsArr = omit(item, dontNeedTransform)
      console.log(`newsArr`, newsArr)
      return Object.keys(newsArr)
    })

  }

  let m = transform(b, 'snapshotId', 'ip')
  console.log(`m`, m);

  return (
    <>
      {/* <Button
        style={{
          position: 'fixed',
          top: 100,
          right: 50,
          zIndex: 999,
        }}
        onClick={() => {
          const element = (
            <div style={{ padding: '20px 40px' }}>
              <Analyze isExport={true} />
            </div>
          )
          // 获取组件的 html
          exportElement(element, `巡检报告_.html`)
        }}
      >
        按钮
      </Button>
      <Logon/> */}
      <Analyze />
      {/* <TreeDemo /> */}
      {/* <ReactTable /> */}

    </>
  )
}

export default App
