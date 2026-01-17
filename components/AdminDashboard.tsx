
import React, { useState } from 'react';
import { Save, Plus, Trash2, Edit3, Settings, Layout, FileText } from 'lucide-react';
import { SiteConfig, SiteContent, Post, Language } from '../types';
import { Button } from './Button';

interface AdminDashboardProps {
  config: SiteConfig;
  content: SiteContent;
  posts: Post[];
  onSaveConfig: (newConfig: SiteConfig) => void;
  onSaveContent: (newContent: SiteContent) => void;
  onAddPost: (post: Post) => void;
  onDeletePost: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  config, content, posts, onSaveConfig, onSaveContent, onAddPost, onDeletePost
}) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'content' | 'posts'>('settings');
  const [localConfig, setLocalConfig] = useState(config);
  const [localContent, setLocalContent] = useState(content);

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (key: keyof SiteContent, lang: Language, value: string) => {
    setLocalContent(prev => ({
      ...prev,
      [key]: { ...prev[key], [lang]: value }
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-24 px-4 sm:px-8 pb-12">
      <div className="max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[700px]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-zinc-950 p-6 flex flex-col space-y-2 border-b md:border-b-0 md:border-r border-zinc-800">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Settings className="text-[#D4AF37]" /> Admin Panel
          </h2>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-[#D4AF37] text-black' : 'hover:bg-white/5 text-zinc-400'}`}
          >
            <Layout size={18} /> Theme Settings
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'content' ? 'bg-[#D4AF37] text-black' : 'hover:bg-white/5 text-zinc-400'}`}
          >
            <Edit3 size={18} /> Edit Content
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'posts' ? 'bg-[#D4AF37] text-black' : 'hover:bg-white/5 text-zinc-400'}`}
          >
            <FileText size={18} /> Manage Posts
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Global Configuration</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm text-zinc-500 mb-1">Site Name</label>
                  <input 
                    name="siteName"
                    value={localConfig.siteName}
                    onChange={handleConfigChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-500 mb-1">Primary Brand Color</label>
                  <div className="flex gap-4">
                    <input 
                      type="color"
                      name="primaryColor"
                      value={localConfig.primaryColor}
                      onChange={handleConfigChange}
                      className="h-12 w-12 bg-zinc-800 border border-zinc-700 rounded-lg p-1 cursor-pointer"
                    />
                    <input 
                      name="primaryColor"
                      value={localConfig.primaryColor}
                      onChange={handleConfigChange}
                      className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-500 mb-1">SEO Title</label>
                  <input 
                    name="seoTitle"
                    value={localConfig.seoTitle}
                    onChange={handleConfigChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
              <Button onClick={() => onSaveConfig(localConfig)} className="gap-2">
                <Save size={18} /> Save Settings
              </Button>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-4">Site Content (Bilingual)</h3>
              {Object.keys(content).map((key) => (
                <div key={key} className="space-y-4 border-b border-zinc-800 pb-6">
                  <h4 className="text-zinc-400 font-semibold uppercase text-xs tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-600 mb-1">KOREAN</label>
                      <input 
                        value={localContent[key as keyof SiteContent].KOR}
                        onChange={(e) => handleContentChange(key as keyof SiteContent, 'KOR', e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-600 mb-1">ENGLISH</label>
                      <input 
                        value={localContent[key as keyof SiteContent].ENG}
                        onChange={(e) => handleContentChange(key as keyof SiteContent, 'ENG', e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={() => onSaveContent(localContent)} className="gap-2">
                <Save size={18} /> Save Content Changes
              </Button>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Manage News & Coaching</h3>
                <Button size="sm" className="gap-2">
                  <Plus size={16} /> New Post
                </Button>
              </div>
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post.id} className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={post.imageUrl} className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-semibold">{post.title.KOR}</h4>
                        <p className="text-xs text-zinc-500">{post.type.toUpperCase()} • {post.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-400"><Edit3 size={18} /></button>
                      <button 
                        onClick={() => onDeletePost(post.id)}
                        className="p-2 hover:bg-red-500/10 rounded-lg text-red-500"
                      ><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
