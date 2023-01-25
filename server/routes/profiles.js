import express from 'express';
import { getProfiles, createProfile, updateProfile, deleteProfile  } from '../controllers/profiles';

const router = express.Router();

router.get('/', getProfiles);
router.post('/', createProfile);
//patch is for updating existing documents
router.patch('/:id', updateProfile)
router.delete('/:id', deleteProfile)

export default router; 