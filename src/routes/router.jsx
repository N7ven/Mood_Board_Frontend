import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from 'pages/404/404';
import AppLayout from 'pages/layout/layout/layout';
import Dashboard from 'pages/module/admin/dashboard/dashboard';
import AlertHome from 'pages/module/admin/alerts/alert';
import SpecialDay from 'pages/module/admin/specialday/specialday';
import PlayBack from 'pages/module/admin/playback/playback';
import Settings from 'pages/module/admin/settings/settings';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route index path="alert" element={<AlertHome />} />
        <Route index path="specialday" element={<SpecialDay />} />
        <Route index path="playback" element={<PlayBack />} />
        <Route index path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
